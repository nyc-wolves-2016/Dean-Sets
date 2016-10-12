class CardsController < ApplicationController

  def index
    deck = Card.all[0..11].shuffle.as_json
    render json: deck
  end

end
