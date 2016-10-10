class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.string :shape, null: false
      t.string :color, null: false
      t.integer :number, null: false
      t.string :shading, null: false
      t.string :status, null: false, default: 'pending'

      t.timestamps(null: false)
    end
  end
end
