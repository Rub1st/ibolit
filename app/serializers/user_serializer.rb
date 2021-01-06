class UserSerializer < ActiveModel::Serializer
  attributes :id,
             :full_name,
             :password,
             :created_at

  belongs_to :user_role
end
