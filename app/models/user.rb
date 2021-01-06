class User < ApplicationRecord
  belongs_to :user_role

  validates :full_name, :password, presence: true
end
