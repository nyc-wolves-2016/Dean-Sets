class CardsController < ApplicationController

  def index
    deck = Card.all.shuffle.as_json
    render json: deck
  end

end
