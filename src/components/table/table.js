import moment from 'moment'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../store/features/lorem/loremSlice'
import './table.css'
function Table() {
  const { posts, loading } = useSelector((state) => state.post)
  const dispatch = useDispatch()
  console.log('posst', posts)
  useEffect(() => {
    dispatch(getPosts())
  }, [])
  return (
    <div className="table">
      <table id="customers">
        <thead>
          <tr>
            <th>Name</th>
            <th>Percentage</th>
            <th>ShareVolume</th>
            <th>Shares</th>
            <th>TransactionDate</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((item) => (
            <tr key={item.id}>
              <td>{item.Name}</td>
              <td>{item.Percentage}</td>
              <td>{item.ShareVolume}</td>
              <td>{item.Shares}</td>
              <td>{moment(item.TransactionDate).format('MM/DD/YYYY')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Table
