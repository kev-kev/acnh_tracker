class User < ApplicationRecord
  has_secure_password :validations => false

  has_many :logs
  has_many :visitors, through: :logs

  validates :username, :presence => true
  validates :username, uniqueness: { case_sensitive: false }

end
