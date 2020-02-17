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
  # validate :ensure_photo

  # def ensure_photo
  #   unless self.photo.attached?
  #     errors[:photo] << "Photo must be attached"
  #   end
  # end
  
  belongs_to :user,
  foreign_key: :creator_id,
  class_name: :User

  has_one_attached :px
end
