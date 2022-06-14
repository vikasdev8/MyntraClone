import {
    REQUEST_PRODUCTS,
    SUCCESS_PRODUCTS,
    FAIL_PRODUCTS,
    REQUEST_SINGLE_PRODUCTS,
    SUCCESS_SINGLE_PRODUCTS,
    FAIL_SINGLE_PRODUCTS,
    CLEAR_ERRORS
} from '../const/productconst'
import axios from 'axios'

export const Allproduct = (e=1) => async (dispatch) => {
    let url = window.location.href
   
    try {

        dispatch({ type: REQUEST_PRODUCTS })

      
       
   let link = url.includes('?') ? `?${url.split("?")[1]}&width=${window.screen.width}&page=${e}` : `?width=${window.screen.width}&page=${e}`
          
    //    let link1 = link ? link +=  `&width=${window.screen.width}` : 
        const { data } = await axios.get(`/api/v1/products${link}`)

        dispatch({ type: SUCCESS_PRODUCTS, payload: data.products, pro:data.pro, length:data.length })

    } catch (error) {

        dispatch({ type: FAIL_PRODUCTS, payload: error.response.data.message })

    }
}

export const singleProduct = (id) => async (dispatch) => {

    try {
        dispatch({ type: REQUEST_SINGLE_PRODUCTS })

        const { data } = await axios.get(`/api/v1/products/${id}`)

        dispatch({ type: SUCCESS_SINGLE_PRODUCTS, payload: data.product, similar: data.similar_product})

    } catch (error) {

        dispatch({ type: FAIL_SINGLE_PRODUCTS, payload: error.response.data.message })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS

    })
}