class Log < ApplicationRecord
  belongs_to :user
  has_many :visitors

  validates :date, uniqueness: { scope: :user }
end
