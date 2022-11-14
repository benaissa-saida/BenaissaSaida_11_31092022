import '../styles/HostProfile.css';

function HostProfile({ name, picture }) {
   return (
      <div className="profile-container">
         <h4 className="host-name">{name}</h4>
         <img className="profile-picture" src={picture} alt="profile" />
      </div>
   );
}

export default HostProfile;
