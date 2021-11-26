# react-template
React Template


## Add New React Project
```bash
make init
```


## Run Server
```bash
make
```


## Install Node Modules
```bash
make install
```


## Add Super User
```bash
make user
```


## Add New React App
```bash
make new app=my_app
```


## Run Tests
```bash
make test
```


## Run Shell
```bash
make shell
```


# AWS S3

## env
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`


## CORS: Cross-origin resource sharing
```json
[
    {
        "AllowedHeaders": [],
        "AllowedMethods": [
            "GET"
        ],
        "AllowedOrigins": [
            "https://www.example1.com",
            "https://www.example2.com",
            "https://project-staging.herokuapp.com"
        ],
        "ExposeHeaders": []
    }
]
```


# anti spam
[reCaptcha](https://www.google.com/recaptcha/admin)


## env
- `RECAPTCHA_SITEKEY`
- `RECAPTCHA_SECRETKEY`