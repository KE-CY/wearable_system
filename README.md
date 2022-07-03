## Description
使用 Nest 框架開發
##  DB design
![image](https://user-images.githubusercontent.com/54132183/177042018-2da216a4-ae84-4403-a24d-a9d2c78d4756.png)


## Api 
### User

1. Create user -> Post: `/user`
```json
{
    "name":"kcy"
    "username":"kcy",
    "password":"kcy",
    "city":"tw"
}
```
2. login -> Post: `/user/login`
```json
{
    "username":"kcy",
    "password":"kcy",
}
```

### Place
1. Get Place -> Get: `/place`
2. Create Place -> Post: `/place`
```json
{
    "title":"test",
    "describle":"test",
    "time":"30"
}
```
3. Update Place -> Put: `/place/:id`
```json
{
    "title":"test",
    "describle":"test",
    "time":"30"
}
```
4. Delete Place -> Delete:`/place/:id`

### Material
1. Create Material -> Post: `/material`
```json
{
    "userId":"1",
    "placeId":"1",
    "pace":"30",
    "distance":"30",
    "calories":"30",
    "avgHeartRate":"30",
    "avgSpeed":"30"
}
```

## Docker run
```bash
$ docker-compose build --no-cache
$ docker-compose up -d
```

## 預計 Api 
### User
1. Create user -> Post: `/user`
```json
{
    "name":"kcy"
    "username":"kcy",
    "password":"kcy",
    "city":"tw"
}
```
Response
```json
{
    "msg":"success"
}
```
2. login -> Post: `/user/login`
```json
{
    "username":"kcy",
    "password":"kcy",
}
```
Response
```json
{
    "msg":"success", 
    "token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imlyb24tbmVzdCJ9.eyJ1c2VybmFtZSI6ImtjeSIsImlhdCI6MTY1Njg1NDE2MCwiZXhwIjoxNjU2ODU3NzYwfQ.kxvlMHhIc3gAvD3iwtcByfvSsFMN4jkN1iL287R_mWo",
}
```
### Place
1. Get Place -> Get: `/place`

Response
```json
{
    "title":"name of the class",    
    "describle":"describle.....",
    "time":"30",
}
```
2. Create Place -> Post: `/place`
```json
{
    "title":"test",
    "describle":"test",
    "time":"30"
}
```

Response
```json
{
    "msg":"success"
}
```
3. Update Place -> Put: `/place/:id`
```json
{
    "title":"test",
    "describle":"test",
    "time":"30"
}
```
Response
```json
{
    "msg":"success"
}
```
4. Delete Place -> Delete:`/place/:id`
Response
```json
{
    "msg":"success"
}
```
### Material
1. Get Material -> Get: `/material`
如有需要搜尋條件的話再傳入
```json
{
    "placeId":"1"
}
```
Response (資料以排序過)
```json
[
    {
        "name":"John",
        "avgSpeed":"17.3",
        "place":"New York"
    },
    {
        "name":"John",
        "avgSpeed":"16.3",
        "place":"New York"
    }
]
```
2. Create Material -> Post: `/material`
```json
{
    "userId":"1",
    "placeId":"1",
    "pace":"30",
    "distance":"30",
    "calories":"30",
    "avgHeartRate":"30",
    "avgSpeed":"30"
}
```
Response
```json
{
    "msg":"success"
}
```


## Author
- Author - [Kelly,Ko](https://github.com/KE-CY)


