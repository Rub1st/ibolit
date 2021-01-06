class SaleSerializer < ActiveModel::Serializer
  attributes :id,
             :count,
             :cost,
             :created_at

  belongs_to :product
end
