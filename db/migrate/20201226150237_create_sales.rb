class CreateSales < ActiveRecord::Migration[6.0]
  def change
    create_table :sales do |t|
      t.references :product, null: false, foreign_key: true
      t.integer :count, null: false, default: 0
      t.float :cost, null: false, default: 0

      t.timestamps
    end
  end
end
