import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faM, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import "../../../css/admin/homeAdmin.scss";
const HomeAdmin = () => {
  return (
    <main className="main-content">
      <div className="HomeAdmin">
        <section className="row">
          <div className="col">
            <div className="card card-box text-center ">
              <div className="card-body bg-artist">
                <div className="admin-circle-box rounded-pill">
                  <FontAwesomeIcon
                    icon={faMicrophone}
                    className="icon-artist"
                  />
                </div>
                <h4 className="text-capitalize mt-4 mb-1">352</h4>
                <p className="mb-0 text-capitalize text-body">
                  total Music Artist
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-box text-center">
              <div className="card-body bg-albums">
                <div className="admin-circle-box rounded-pill">
                  <FontAwesomeIcon
                    icon={faCompactDisc}
                    className="icon-albums"
                  />
                </div>
                <h4 className="text-capitalize mt-4 mb-1">352</h4>
                <p className="mb-0 text-capitalize text-body">
                  total Music Artist
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-box text-center">
              <div className="card-body bg-songs">
                <div className="admin-circle-box rounded-pill">
                  <FontAwesomeIcon icon={faMusic} className="icon-songs" />
                </div>
                <h4 className="text-capitalize mt-4 mb-1">352</h4>
                <p className="mb-0 text-capitalize text-body">
                  total Music Artist
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-box text-center">
              <div className="card-body bg-playlist">
                <div className="admin-circle-box rounded-pill">
                  <FontAwesomeIcon icon={faList} className="icon-playlist" />
                </div>
                <h4 className="text-capitalize mt-4 mb-1">352</h4>
                <p className="mb-0 text-capitalize text-body">
                  total Music Artist
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card card-box text-center">
              <div className="card-body bg-users">
                <div className="admin-circle-box rounded-pill">
                  <FontAwesomeIcon icon={faCircleUser} className="icon-users" />
                </div>
                <h4 className="text-capitalize mt-4 mb-1">352</h4>
                <p className="mb-0 text-capitalize text-body">
                  total Music Artist
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="row"></section>
        <section className="row"></section>
      </div>
    </main>
  );
};
export default HomeAdmin;
