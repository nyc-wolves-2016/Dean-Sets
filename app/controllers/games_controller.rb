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

  def card_combos(cards_ary)
    cards_ary.combination(3).to_a
  end

  private
  def game_params
    params.require(:game).permit(:sets, :invalid_sets)
  end
end
