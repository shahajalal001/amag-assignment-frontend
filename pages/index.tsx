import UserLayout from "../layouts/user";
import Link from "next/link";
import { Button } from "@mui/material";
import { getSites } from "../helpers/backendHelper";
import { useFetch } from "../helpers/hooks";

const Home = () => {
    const [sites] = useFetch(getSites)
  return(
      <div className="card">
          <div className="card-header bg-white">
              <div className="d-flex justify-content-between">
                  <h4>Sites</h4>
                  <Link href={"/site"}>
                      <Button variant="outlined" size="small">Add Site</Button>
                  </Link>
              </div>
          </div>
          <div className="card-body">
              <div className="">
                  <table className="table">
                      <thead>
                      <tr>
                          <th>#</th>
                          <th>Name</th>
                          <th>Action</th>
                      </tr>
                      </thead>
                      <tbody>
                          {
                              (sites)?.map((site:any, index: number) => (
                                  <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>{site.name}</td>
                                      <td><Link href={"/site/"+site._id}><Button>Edit</Button></Link></td>
                                  </tr>
                              ))
                          }
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  )
}

Home.layout = UserLayout
export default Home