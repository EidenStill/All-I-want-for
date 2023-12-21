import requests
import re
from bs4 import BeautifulSoup
import mysql.connector
from datetime import datetime
import hashlib
from selenium import webdriver

host = "localhost"
user = "root"
password = ""
database = "aliwant"

def storeLZDeals():

    try:
        connection = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )

        if connection.is_connected():
            print("PY: Connected to the database")
            cursor = connection.cursor()
            # url = f"https://allevents.in/{c}/all?ref=new-cityhome-popular"
            url = f"https://iprice.ph/coupons/lazada/"
            headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
            response = requests.get(url, headers=headers)
            soup = BeautifulSoup(response.text, 'lxml')

            vouchers = soup.find_all('div', class_='l4 q8 gN l7 bM q8 zd c-green kq nocode')

            for voucher in vouchers:
   
                value = voucher.find('div', class_=re.compile('vF a_ P f22-l lh-27 lh-30-l mv4-4x')).text.strip()
                details = voucher.find('p', class_='a en rp f1 lh-24-l fw6-l').text.strip()  
                div_elements = soup.find_all('div', class_='bc ac en iy')

                # the first div as 'date' and the rest as 'extra_details'
                date = div_elements[0].text.strip() if div_elements else None
                extra_details = [div.text.strip() for div in div_elements[1:]] if len(div_elements) > 1 else []
                extra_details = ', '.join(extra_details)
                source = "Lazada"

                date_str = date

                # Convert the string to a datetime object
                date_object = datetime.strptime(date_str, "%d %B %Y")

                # Format the datetime object as a string in "year-month-day" format
                date = date_object.strftime("%Y-%m-%d")
                # if price:
                #     price = price.text.strip()
                # else:
                #    price = "Free"
                
                # link = voucher['data-link']

                # response2 = requests.get(link)
                # soup2 = BeautifulSoup(response2.text, 'lxml')
                # result = soup2.find('span', style="padding: 0").text.strip()
                # dt = re.sub(r'\(GMT\+\d{2}:\d{2}\)', '', result)

                # date = dt.split(" at ")[0]
                # time = dt.split(" at ")[1].split(" to ")[0]
                # desc = soup2.find('div', class_="voucher-description-html").text.strip()
                # img = soup2.find('img', class_="voucher-banner-image hidden-phone lazy")['src']
                # date_object = datetime.strptime(date, "%a %b %d %Y")
                # date = date_object.strftime("%Y-%m-%d")
                # time_object = datetime.strptime(time, "%I:%M %p")
                # time = time_object.strftime("%H:%M:%S")

                # result_string = f"{name},{date},{time}"
                # hash = hashlib.sha256(result_string.encode()).hexdigest()
                data = (source, details, value, date, extra_details)

                insert_query = "INSERT IGNORE INTO discounts (discount_source, discount_description, discount_value, discount_expiration, discount_extraDetails) VALUES (%s, %s, %s, %s, %s)"
                cursor.execute(insert_query, data)
                connection.commit()
                # print("Upcoming voucher added successfully")
                    

    except mysql.connector.Error as err:
        print(f"Error: {err}")

    finally:
        if 'connection' in locals() and connection.is_connected():
            connection.close()
            print("Connection closed")

def storeLZDSales():

    try:
        connection = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )

        if connection.is_connected():
            print("PY: Connected to the database")
            cursor = connection.cursor()
            url = f"https://pages.lazada.com.ph/wow/gcp/route/lazada/ph/upr_1000345_lazada/channel/ph/upr-router/render?spm=a2o4l.home-ph.3964150330.14.bdf9ca18fg5L2q&wh_pid=/lazada/channel/ph/shopping-guide/lazflash&hybrid=1&data_prefetch=true&hide_h5_title=true&at_iframe=1&lzd_navbar_hidden=true&disable_pull_refresh=true&prefetch_replace=1&skuIds=3318565036,4107397292,3841347146,3265687560,3159562774,3952149634,3728238083"
            
            driver = webdriver.Chrome()

            # Open the page
            driver.get(url)

            # Get the page source after waiting for some time (adjust as needed)
            driver.implicitly_wait(10)  # Wait for up to 10 seconds
            response = driver.page_source

            # Close the browser
            driver.quit()

            headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}
            # response = requests.get(url, headers=headers)
            soup = BeautifulSoup(response, 'lxml')
            current_div = soup.find_all('div', class_ = 'item-list J_FSItemList')

            current_div = current_div[0]
            vouchers = current_div.find_all('div', class_='flash-unit card-hover pull-left false')

            for voucher in vouchers:
                name = voucher.find('div', class_='sale-title').text.strip()  
                price = voucher.find('div', class_='sale-price')
                # div_elements = soup.find_all('div', class_='bc ac en iy')

                img = voucher.find('img', class_='image')['src']
                # the first div as 'date' and the rest as 'extra_details'
                date = datetime.now().strftime('%Y-%m-%d')
                discount_value = voucher.find('span', class_='discount').text.strip()  
                original =  voucher.find('span', class_='origin-price-value').text.strip()  
                source = "Lazada"

                if price:
                    price = price.text.strip()
                else:
                   price = "Free"

                # hash = hashlib.sha256(result_string.encode()).hexdigest()
                data = (source, name, price, img, date, discount_value, original)

                insert_query = "INSERT IGNORE INTO sales (sale_source, item_name, item_price, item_img, sale_expiration, discount_value, original_price) VALUES (%s, %s, %s, %s, %s, %s, %s)"
                cursor.execute(insert_query, data)
                connection.commit()
                # print("Upcoming sales added successfully")
                    

    except mysql.connector.Error as err:
        print(f"Error: {err}")

    finally:
        if 'connection' in locals() and connection.is_connected():
            connection.close()
            print("Connection closed")

def delete():
    try:
        connection = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )

        if connection.is_connected():
            cursor = connection.cursor()
            curr = datetime.now().strftime('%Y-%m-%d')
            cursor.execute(f"DELETE FROM discounts WHERE discount_expiration < \'{curr}\'")
            cursor.execute(f"DELETE FROM sales WHERE sale_expiration < \'{curr}\'")
            connection.commit()
                    

    except mysql.connector.Error as err:
        print(f"Error: {err}")

    finally:
        if 'connection' in locals() and connection.is_connected():
            connection.close()
            print("Connection closed")

storeLZDeals()
storeLZDSales()
delete()