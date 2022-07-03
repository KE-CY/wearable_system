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


## Author

- Author - [Kelly,Ko](https://github.com/KE-CY)


