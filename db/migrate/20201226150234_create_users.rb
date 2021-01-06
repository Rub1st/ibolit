class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :full_name
      t.references :user_role, null: false, foreign_key: true
      t.string :password, null: false, default: ''

      t.timestamps
    end
  end
end
