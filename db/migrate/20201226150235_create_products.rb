class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name, null: false, default: ''
      t.string :annotation, null: false, default: ''
      t.integer :count, null: false, default: 1
      t.float :price, null: false, default: 0

      t.timestamps
    end
  end
end
