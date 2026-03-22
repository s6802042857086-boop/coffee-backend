import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/api/customers/:phone", (req, res) => {
    const sql = `SELECT * FROM customer ORDER BY customer_id ASC`;
    db.query(sql, (err, results) => {
        if (err) {
            console.error("not_found:", err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json({
            message: "success",
            count: results.length,
            data: results,
        });
    });
});

export default router;
