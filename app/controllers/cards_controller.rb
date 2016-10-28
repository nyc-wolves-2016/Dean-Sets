class CardsController < ApplicationController

  def index
    deck = Card.all[0..8].as_json
    # deck = Card.all.shuffle.as_json
    render json: deck
  end

end
