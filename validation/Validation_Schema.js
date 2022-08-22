const Joi = require('joi');

exports.register_validator = Joi.object({
        first_name: Joi.string()
                   .min(3)
                   .required()
                   .messages({ 
                      'string.empty': 'First name cannot be empty',
                      'string.min' : 'First name cannot be less than 3 chars'
                    }),
        last_name: Joi.string()
                   .min(3)
                   .required()
                   .messages({
                      'string.empty':'Last name cannot be empty',       
                      'string.min':'Last name cannot be less than 3 chars',
                    }),
       level: Joi.string()
              .valid('jss1','jss2','jss3','ss1','ss2','ss3','JSS1','JSS2','JSS3','SS1','SS2','SS3')
              .required(),
       email: Joi.string()
              .email()
              .required(),
       subject1: Joi.string().allow('').optional(),
       subject2: Joi.string().allow('').optional(),
       subject3: Joi.string().allow('').optional(),
       subject4: Joi.string().allow('').optional(),
       subject5: Joi.string().allow('').optional(),
       subject6: Joi.string().allow('').optional(),
       subject7: Joi.string().allow('').optional(),
       subject8: Joi.string().allow('').optional(),
       subject9: Joi.string().allow('').optional(),
       subject10: Joi.string().allow('').optional(),
       subject11: Joi.string().allow('').optional(),
       subject12: Joi.string().allow('').optional(),
             
    });


exports.adminReg = Joi.object({
       first_name: Joi.string()
                     .min(3)
                     .required()
                     .messages({
                            'string.empty': 'Kindly provide a first name',
                            'string.min': 'first name must be a min of 3 chars'
                     }),
       last_name: Joi.string()
                     .min(3)
                     .required()
                     .messages({
                            'string.empty': 'Kindly provide a last name',
                            'string.min': 'last name must be a min of 3 chars'
                     }),
       
       email: Joi.string()
                .email()
                .required()
                .messages({
                     'string.empty': 'Kindly provide a valid password',
                }),

       pass: Joi.string()
                     .min(6)
                     .required()
                     .messages({
                            'string.empty': 'Kindly provide a valid password',
                            'string.min' : 'Min of 6 chars required for password'
                     })
});

exports.emailVal = Joi.object({
       email: Joi.string()
              .email()
              .required(),
       
});

exports.adminSignin = Joi.object({
       email: Joi.string()
              .email()
              .required(),
       pass: Joi.string()
              .min(6)
              .required()
              .messages({'string.empty': 'Password cannot be empty',
                         'string.min': 'Password cannot be less than 6 chars'
                     })

});

