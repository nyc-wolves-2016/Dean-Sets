class CardsController < ApplicationController

  def index
    deck = Card.all.shuffle[0..11].as_json
    render json: deck
  end

end
