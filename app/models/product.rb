class Product < ApplicationRecord
  has_many :arrived_products, dependent: :destroy
  has_many :sales, dependent: :destroy

  validates :name, :annotation, presence: true
  validates_numericality_of :count, greater_than_or_equal_to: 0
end
