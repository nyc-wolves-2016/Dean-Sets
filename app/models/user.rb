class User < ApplicationRecord
  has_many :games

  validates :username, :email, presence: true, uniqueness: true 
  has_secure_password
end
