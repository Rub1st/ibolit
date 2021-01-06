class ArrivedProductSerializer < ActiveModel::Serializer
  attributes :id,
             :count,
             :created_at

  belongs_to :product
end
