import React from 'react';
import { withSnackbar } from 'notistack'
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import {
  Typography,
  Button,

} from '@material-ui/core'
import API from '../../api'
import ProductForm from './product'
class HomePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listProduct: [{
        "productId": "0622fe2c-e07d-11ea-878a-0242ac110002",
        "display": "Sản phẩm mới",
        "provider": "Schmidt Inc",
        "description": "mô tả sản phẩm",
        "imageUrl": "http://lorempixel.com/640/480/",
        "priceIn": 6047274,
        "priceOut": 7927556,
        "priceSale": 590470,
        "shipday": 7,
        "instock": 2,
        "status": "inventore",
        "categoryId": "5f80806d-a95a-3fcb-830f-7817a4c11a6d",
        "created_at": "2020-08-17T04:30:16.000Z",
        "updated_at": "2020-08-17T04:30:16.000Z"
    },
    {
        "productId": "093ed0ea-74a5-3c77-a20e-0cf31bafd0f6",
        "display": "voluptatem",
        "provider": "Abernathy, Lockman and Jaskolski",
        "description": "Facere aut quas rerum sequi voluptas. Aliquam illo et ut eligendi consequatur est. Neque nesciunt su",
        "imageUrl": "http://lorempixel.com/640/480/",
        "priceIn": 9284624,
        "priceOut": 15920327,
        "priceSale": 261162,
        "shipday": 3,
        "instock": 6,
        "status": "in",
        "categoryId": "338935db-4990-3f62-a75c-ce7512a0dd31",
        "created_at": "1988-02-19T16:49:48.000Z",
        "updated_at": "1993-02-04T09:22:59.000Z"
    },
    {
        "productId": "0a981cd5-221b-3c41-a57d-b4c17c9cca04",
        "display": "illo",
        "provider": "Hickle-O'Reilly",
        "description": "A aperiam voluptatem sit non. Sit pariatur sit iure eos voluptatem ut. Quia non impedit autem odio. ",
        "imageUrl": "http://lorempixel.com/640/480/",
        "priceIn": 3460369,
        "priceOut": 8932531,
        "priceSale": 481536,
        "shipday": 5,
        "instock": 2,
        "status": "illum",
        "categoryId": "81e5f2e3-45d9-3dcd-8693-2d8b95d9331f",
        "created_at": "1991-05-10T06:02:28.000Z",
        "updated_at": "1987-02-16T22:22:38.000Z"
    },
    {
        "productId": "0b4ff015-b216-3ffc-92c0-45cb953f9773",
        "display": "cumque",
        "provider": "Ruecker, Gutkowski and Schuster",
        "description": "Amet sed labore voluptas et sit. Quae quo ut iusto ex laboriosam aliquam optio cum. Aut velit blandi",
        "imageUrl": "http://lorempixel.com/640/480/",
        "priceIn": 3528873,
        "priceOut": 8420388,
        "priceSale": 227143,
        "shipday": 1,
        "instock": 7,
        "status": "omnis",
        "categoryId": "902d08e7-04da-3be1-a2b0-51fe82ad88db",
        "created_at": "2000-09-22T11:33:49.000Z",
        "updated_at": "1983-11-17T14:39:38.000Z"
    },],
      total: 0,
      page: 1,
      size: 8,
    }
  }
  async fetchData() {
    const res = await API.product.getAllProduct({
      page: this.state.page,
      size: this.state.size
    })

    console.log(res.data)
    if (res.status) {
      this.setState({
        listProduct: res.data,
        total: res.data.metadata.total
      })
    } else {
      this.props.enqueueSnackbar(res.message, { variant: 'error' })
    }
  }
  async componentDidMount() {
    await this.fetchData()
  }
  prevPage = async () => {
    if (this.state.page > 1) {
      this.setState({
        page: this.state.page - 1
      })
      await this.fetchData()
    } else {
      alert('Page min')
    }

  }
  nextPage = async () => {
    if (this.state.page < Math.ceil(this.state.total / this.state.size)) {
      this.setState({
        page: this.state.page + 1
      })
      await this.fetchData()
    } else {
      alert('Page max')
    }
  }
  render() {
    return <Grid container direction="column" spacing={3} margin={10} padding={10}>
        <Grid item container spacing={1}>
        {
            this.state.listProducts.map((product) => 
            <Grid container item xs={6}>
                <Product product={product}></Product>
            </Grid>)
        } </Grid>
        <Grid item container direction="row" justify="space-evenly" alignItems="center">
            <Button onClick={this.prevPage} variant="contained" style={{backgroundColor: "#1979a9"}} startIcon={<NavigateBeforeIcon style={{color: "#edb879"}}/>}>prev</Button>    
            <Typography variant="subtitle1" style={{color: "#cce7e8"}}>PAGING: {this.state.page} - {Math.ceil(this.state.total/this.state.size)}</Typography>    
            <Button onClick={this.nextPage} variant="contained" style={{backgroundColor: "#1979a9"}} endIcon={<NavigateNextIcon style={{color: "#edb879"}}/>}>next</Button>
        </Grid>
    </Grid>
}
}

export default withSnackbar(HomePage);