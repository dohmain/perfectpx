# == Schema Information
#
# Table name: photos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string
#  creator_id  :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Photo < ApplicationRecord
  validates :title, presence: true
  
  belongs_to :creator,
  foreign_key: :creator_id,
  class_name: :User

  has_many :comments,
  foreign_key: :photo_id,
  class_name: :Comment

  has_one_attached :px,
  dependent: :destroy
end
