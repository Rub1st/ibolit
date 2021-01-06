# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

UserRole.destroy_all
Product.destroy_all

UserRole.create([{ name: 'Администратор' }, { name: 'Фармацевт' }])

User.create([{ full_name: 'Бубенцов Алексей',
               user_role: UserRole.find_by(name: 'Фармацевт'),
               password: '12345678' },
             { full_name: 'Носов Анатолий',
               user_role: UserRole.find_by(name: 'Администратор'),
               password: '87654321' }])

Product.create([{ name: 'Активированный Уголь',
                  annotation: 'Таблетки черного цвета от всего на свете.',
                  count: 100,
                  price: 1.5 }])

ArrivedProduct.create([{ product: Product.find_by(name: 'Активированный Уголь'),
                         count: 250 }])

Sale.create([{ product: Product.find_by(name: 'Активированный Уголь'),
               count: 10 }])
