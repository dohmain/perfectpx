class AddColumnToPhotos < ActiveRecord::Migration[5.2]
  def change
    add_column :photos, :unsplashURL, :string
    add_column :photos, :unsplashUserURL, :string
    add_column :photos, :unsplashName, :string 
  end
end
