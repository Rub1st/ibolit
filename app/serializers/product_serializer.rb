class ProductSerializer < ActiveModel::Serializer
  attributes :id,
             :name,
             :count,
             :annotation,
             :price
end
