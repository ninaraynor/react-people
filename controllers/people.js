// DEPENDENCIES
const express = require('express')
const {People} = require('../models')

// CONTROLLERS

// PEOPLE INDEX ACTION
const index = async (req,res,next) => {
	try {
    // get all people
    res.json(await People.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// PEOPLE CREATE ACTION
const create = async (req,res,next) => {
  try {
    // create new person
    res.json(await People.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// PEOPLE SHOW ACTION
const show = async (req,res,next) => {
    try {
        // send one person
        res.json(await People.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
};

// ... the remaining people controller actions will go below

// PEOPLE DESTROY ACTION
const destroy = async (req,res,next) => {
    try {
      // delete people by ID
      res.json(await People.findByIdAndDelete(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  }

// PEOPLE UPDATE ACTION
const update = async (req,res,next) => {
  try {
    // update people by ID, provide the form data, and return the updated document.
    res.json(
      await People.findByIdAndUpdate(req.params.id, req.body, {new:true})
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
}

// EXPORT Controller Action
module.exports = {
	index,
	create,
	show,
    delete: destroy,
	update
}