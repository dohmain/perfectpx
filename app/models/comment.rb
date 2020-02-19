# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  photo_id   :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :photo,
  foreign_key: :photo_id,
  class_name: :Photo 

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User 
end
