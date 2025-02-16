'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'sonner';
import { SEND_MSG_DESC, SUCCESS_MSG_DESC, THROTTLE_DELAY } from './consts';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const sendEmail = (params) => {
    const toastId = toast.loading(SEND_MSG_DESC);
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    emailjs
      .send(serviceId, templateId, params, {
        publicKey,
        limitRate: {
          throttle: THROTTLE_DELAY, // Can send only 1 email in 5 seconds
        },
      })
      .then(
        () => {
          toast.success(SUCCESS_MSG_DESC, { id: toastId });
        },
        (error) => {
          toast.error(ERROR_MSG_DESC, {
            id: toastId,
          });
        }
      );
  };
  const onSubmit = (data) => {
    const templateParams = {
      to_name: 'braniubojni',
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };
    sendEmail(templateParams);
  };

  return (
    <>
      <Toaster />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <input
          type="text"
          placeholder="name"
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          {...register('name', { required: 'This field is required !!!' })}
          minLength={{
            value: 3,
            message: 'Name must be at least 3 characters long !!!',
          }}
        />
        {errors.name && (
          <span className="text-accent inline-block self-start">
            {errors.name.message}
          </span>
        )}
        <input
          type="text"
          placeholder="email"
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          {...register('email', {
            required: 'This field is required !!!',
          })}
        />
        {errors.email && (
          <span className="text-accent inline-block self-start">
            {errors.email.message}
          </span>
        )}
        <textarea
          placeholder="message"
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
          {...register('message', {
            required: 'Message is required !!!',
            maxLength: {
              value: 500,
              message: 'Message must be less than 500 characters long !!!',
            },
            minLength: {
              value: 10,
              message: 'Message must be at least 10 characters long !!!',
            },
            max: 500,
            min: 10,
          })}
        />
        {errors.message && (
          <span className="text-accent inline-block self-start">
            {errors.message.message}
          </span>
        )}

        <input
          value="cast your message"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg cursor-pointer capitalize"
          type="submit"
        />
      </form>
    </>
  );
}
