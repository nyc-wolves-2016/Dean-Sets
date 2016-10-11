class GamesController < ApplicationController

  def create
    @game = Game.new(user_id: current_user.id)

    if @game.save
      render json: @game
    end
  end

  def update
    @game = Game.find_by(id: game_params[:id])
    @game.update_attributes(game_params)
    render json: @game
  end

  def card_combos
    # binding.pry
    card_combos = params[:cards][:cards_ary].values.combination(3).to_a.as_json
    render json: card_combos
  end

  private
  def game_params
    params.require(:game).permit(:sets, :invalid_sets)
  end

  def cards_params
    params.require(:cards).permit(:cards_ary)
  end
end
