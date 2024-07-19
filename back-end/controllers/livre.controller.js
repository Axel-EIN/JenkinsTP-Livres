import { Livre } from '../models/index.js';

export const add = async (req, res) => {
    try {
        console.log('test2');
        const livre = await Livre.create(req.body);
        await livre.createAuteur(req.body.auteur);
        res.status(201).json(livre)
    } catch (erreur) {
        res.status(500).json({ error: "Error lors de la création." })
    }
}

export const getAll = async (req, res) => {
    try {
        console.log('test');
        const livres = await Livre.findAll()
        res.status(200).json(livres);
    } catch (erreur) {
        res.status(500).json({ error: "Error lors de la récupération des livres." })
    }
}

export const getById = async (req, res) => {
    try {
        const id = req.params.id;
        const livre = await Livre.findByPk(id)
        res.status(200).json(livre)
    } catch (erreur) {
        res.status(500).json({ error: "Error lors de la récupération du livre." })
    }
}

export const updateById = async (req, res) => {
    try {
        const livre = await Livre.findByPk(req.params.id)
        await article.update(req.body);
        return res.status(200).json(article)
    } catch (erreur) {
        res.status(500).json({ error: "Error lors de la récupération ou de l'édition du livre." })
    }
}

export const deleteById = async (req, res) => {
    try {
        const article = await Article.findByPk(req.params.id)
        await article.destroy();
        res.status(200).json("Livre supprimé !")
    } catch (erreur) {
        res.status(500).json({ error: "Erreur lors de la récupération ou de la suppression du livre." })
    }
}