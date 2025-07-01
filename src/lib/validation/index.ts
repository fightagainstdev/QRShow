import * as z from "zod";

// ============================================================
// USER
// ============================================================
export const SignupValidation = z.object({
  name: z.string().min(2, { message: "名字至少占两个字符" }),
  username: z.string().min(2, { message: "名字至少占两个字符" }),
  email: z.string().email(),
  password: z.string().min(8, { message: "密码至少占八个字符" }),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z.string().min(8, { message: "密码至少占八个字符" }),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "名字至少占两个字符" }),
  username: z.string().min(2, { message: "名字至少占两个字符" }),
  email: z.string().email(),
  bio: z.string(),
});

// ============================================================
// POST
// ============================================================
export const PostValidation = z.object({
  caption: z.string().min(5, { message: "最少五个字符" }).max(2200, { message: "最多2200个字符" }),
  file: z.custom<File[]>(),
  location: z.string().min(1, { message: "这片区域需要" }).max(1000, { message: "最多1000个字符"" }),
  tags: z.string(),
});
