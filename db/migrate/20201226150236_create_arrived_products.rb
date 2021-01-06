class CreateArrivedProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :arrived_products do |t|
      t.references :product, null: false, foreign_key: true
      t.integer :count, null: false, default: 0

      t.timestamps
    end
  end
end
