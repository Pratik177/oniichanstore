/* eslint-disable @typescript-eslint/no-unused-vars */
import data from '@/lib/data'
import { connect } from '@/lib/db'
import ProductModel from '@/models/ProductModel'
import UserModel from '@/models/User'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const { users, products } = data
  await connect()
  await UserModel.deleteMany()
  await UserModel.insertMany(users)

  await ProductModel.deleteMany()
  await ProductModel.insertMany(products)

  return NextResponse.json({
    message: 'seeded successfully',
    users,
    products,
  })
}
