# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_26_150237) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "arrived_products", force: :cascade do |t|
    t.bigint "product_id", null: false
    t.integer "count", default: 0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["product_id"], name: "index_arrived_products_on_product_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.string "annotation", default: "", null: false
    t.integer "count", default: 1, null: false
    t.float "price", default: 0.0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sales", force: :cascade do |t|
    t.bigint "product_id", null: false
    t.integer "count", default: 0, null: false
    t.float "cost", default: 0.0, null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["product_id"], name: "index_sales_on_product_id"
  end

  create_table "user_roles", force: :cascade do |t|
    t.string "name", default: "", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "full_name"
    t.bigint "user_role_id", null: false
    t.string "password", default: "", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_role_id"], name: "index_users_on_user_role_id"
  end

  add_foreign_key "arrived_products", "products"
  add_foreign_key "sales", "products"
  add_foreign_key "users", "user_roles"
end
