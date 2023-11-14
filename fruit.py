import os
import requests
from bs4 import BeautifulSoup

# 设置搜索关键词和下载数量
search_query = '猫'  # 替换为您想要搜索的关键词
download_count = 10  # 替换为您想要下载的图像数量

# 创建一个文件夹来保存下载的图像
if not os.path.exists(search_query):
    os.makedirs(search_query)

# 构建百度图片搜索的URL
search_url = f'https://image.baidu.com/search/flip?tn=baiduimage&word={search_query}'

# 发送HTTP请求获取搜索结果
response = requests.get(search_url)

if response.status_code == 200:
    soup = BeautifulSoup(response.text, 'html.parser')
    img_tags = soup.find_all('img', class_='main_img')
    for i, img_tag in enumerate(img_tags):
        if i >= download_count:
            break
        img_url = img_tag['data-imgurl']
        img_response = requests.get(img_url)
        if img_response.status_code == 200:
            # 获取文件扩展名
            file_extension = img_url.split('.')[-1]
            # 保存图像到本地文件夹
            with open(f'{search_query}/{search_query}_{i+1}.{file_extension}', 'wb') as f:
                f.write(img_response.content)
            print(f'Downloaded image {i + 1}/{download_count}')
        else:
            print(f'Failed to download image {i + 1}')
else:
    print('Failed to retrieve search results.')