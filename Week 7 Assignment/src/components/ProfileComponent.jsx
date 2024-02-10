import image from '../assets/bubble.png';
import image2 from '../assets/profile.png';

function ProfileComponent() {
  return (
    <div className="flex justify-center mt-[4rem]">
      <div className="w-[30rem]">
        <div className="border border-2 text-center">
          <div className="flex justify-center mb[-40px]">
            <img
              src={image}
              className="w-[30rem] h-48"
              alt="bubble"
            />
          </div>
          <div className="flex justify-center mb-2">
            <img
              src={image2}
              className="w-20 h-20 rounded-full"
              alt="profile"
            />
          </div>
          <div>
            <div className="text-3xl flex justify-center mt-4">
              <span className="font-bold">Rita Correia</span>
              <span className="font-light px-2"> 32</span>
            </div>
            <div className="font-light text-3xl mb-6 mt-2">London</div>
            <div className="border border-1"></div>
          </div>

          <div className="flex justify-between text-2xl p-4">
            <div className="flex flex-col items-center">
              <div className="font-bold">80K</div>
              <div className="font-light">Followers</div>
            </div>

            <div className="flex flex-col items-center">
              <div className="font-bold">803K</div>
              <div className="font-light">Likes</div>
            </div>


            <div className="flex flex-col items-center">
              <div className="font-bold">1.4K</div>
              <div className="font-light">Photos</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileComponent;
