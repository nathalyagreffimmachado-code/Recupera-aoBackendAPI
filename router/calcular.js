import express from 'express'
const router = express()

router.post("/somar",(req,res)=>{
    const {num1,num2} = req.body
    const somar = num1+num2
    const resultado = num1+num2
    res.status(200).send({message: somar})
})


router.post("/sub",(req,res)=>{
    const {num1,num2} = req.body
    const sub = num1-num2
    const resultado = num1-num2
    res.status(200).send({message: sub})
})

router.post("/div",(req,res)=>{
    const {num1,num2} = req.body
    const div = num1/num2
    const resultado = num1/num2
    res.status(200).send({message: div})
})

router.post("/mult",(req,res)=>{
    const {num1,num2} = req.body
    const mult = num1*num2
    const resultado = num1*num2
    res.status(200).send({message: mult})
})

router.get("/mult",(req,res)=>{
 try{
    const resultado = listar ()
    res.status(200).send({message: resultado })
 } catch (error) {
    res.status(500).send({message: error})
 }
})
 export default router
