 Let’s analyze the structure of the project in more detail

Controllers — here, you should store all your API endpoints
Models — for storing the data models
API — here, the interaction of your data with your API endpoint is stored (I will explain it in more details further in the article)
Utils — here, the entire supporting code of the app is stored (email sending, PDFs generation,etc.)
Middleware — here, you can find all Express middleware of the application
Mongo or db or <yourDatabaseName> — it contains all the work with your database
Сonfig or .env — it is better to store all your app’s settings in a separate file (such as js. Json or env.)


Schema. Js — Below is an approximate implementation of the scheme. Everything is fairly straightforward. First, you declare the fields and types of your models. You may also add extra verifications and validations you can read about in the documentation.

