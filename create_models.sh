#!/bin/bash

# rails generate model UserRole name:string --force
# rails generate model User full_name:string user_role:references password:string --force
# rails generate model Product name:string annotation:string count:integer price:float --force
# rails generate model ArrivedProduct product:references count:integer --force
# rails generate model Sale product:references count:integer cost:float

# rails generate controller Users
# rails generate controller Products
# rails generate controller ArrivedProducts
# rails generate controller Sales

rails generate serializer User
rails generate serializer Product
rails generate serializer ArrivedProduct
rails generate serializer Sale

# rails generate controller Static