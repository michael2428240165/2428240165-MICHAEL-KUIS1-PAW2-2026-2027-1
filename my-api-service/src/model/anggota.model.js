import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    nama_anggota: {
      type: String,
      required: true,
    },
    jenis_paket: {
      type: String,
      required: true,
    },
    status_aktif: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const AnggotaModel = mongoose.model("anggota_gym", schema);

export default AnggotaModel;