class Card < ApplicationRecord
  validates :shape, :color, :number, :shading, :status, presence: true
end
