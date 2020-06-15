class Log < ApplicationRecord
  belongs_to :user
  has_many :visitors

  # need to validate uniqueness per user...
  validates :date, uniqueness: { scope: :user }
end
