﻿/*
 *	This file is part of SharpMap.MapViewer
 *  SharpMapMapViewer is free software © 2008 Newgrove Consultants Limited, 
 *  http://www.newgrove.com; you can redistribute it and/or modify it under the terms 
 *  of the current GNU Lesser General Public License (LGPL) as published by and 
 *  available from the Free Software Foundation, Inc., 
 *  59 Temple Place, Suite 330, Boston, MA 02111-1307 USA: http://fsf.org/    
 *  This program is distributed without any warranty; 
 *  without even the implied warranty of merchantability or fitness for purpose.  
 *  See the GNU Lesser General Public License for the full details. 
 *  
 *  Author: John Diss 2008
 * 
 */
using System;
using System.ComponentModel;
using System.Windows.Forms;
using GeoAPI.CoordinateSystems;
using GeoAPI.CoordinateSystems.Transformations;
using SharpMap.Data;
using SharpMap.Data.Providers;
using SharpMap.Data.Providers.Db;
using SharpMap.Data.Providers.ShapeFile;
using SharpMap.Layers;
using SharpMap.Styles;

namespace MapViewer.Controls
{
    public class CustomTreeView : TreeView
    {
        public CustomTreeView()
        {
            NodeMouseClick += CustomTreeView_NodeMouseClick;
            AfterCheck += CustomTreeView_AfterCheck;
        }

        public event EventHandler<LayerEnabledChangeEventArgs> RequestLayerEnabledChange;
        public event EventHandler<TreeNodeMouseClickEventArgs> LayerNodeClick;
        public event EventHandler<TreeNodeMouseClickEventArgs> ProviderNodeClick;
        public event EventHandler<TreeNodeMouseClickEventArgs> TransformNodeClick;
        public event EventHandler<TreeNodeMouseClickEventArgs> CoordinateSystemNodeClick;


        private void CustomTreeView_NodeMouseClick(object sender, TreeNodeMouseClickEventArgs e)
        {
            if (e.Node is LayerNode)
            {
                if (LayerNodeClick != null)
                    LayerNodeClick(this, e);
            }
            else if (e.Node is ProviderNode)
            {
                if (ProviderNodeClick != null)
                    ProviderNodeClick(this, e);
            }
            else if (e.Node is CoordinateSystemNode)
            {
                if (CoordinateSystemNodeClick != null)
                    CoordinateSystemNodeClick(this, e);
            }
            else if (e.Node is CoordinateTransformNode)
            {
                if (TransformNodeClick != null)
                    TransformNodeClick(this, e);
            }
        }

        protected void OnRequestLayerEnabledChange(LayerEnabledChangeEventArgs args)
        {
            if (RequestLayerEnabledChange != null)
                RequestLayerEnabledChange(this, args);
        }

        private void CustomTreeView_AfterCheck(object sender, TreeViewEventArgs e)
        {
            if (e.Node is LayerNode)
            {
                LayerNode n = e.Node as LayerNode;
                if (e.Node.Checked != n.Layer.Enabled)
                    OnRequestLayerEnabledChange(new LayerEnabledChangeEventArgs(n.Layer, e.Node.Checked));
            }
        }

        #region Nested type: CoordinateSystemNode

        protected class CoordinateSystemNode : CustomTreeNode
        {
            private ICoordinateSystem coordinateSystem;

            public CoordinateSystemNode(ICoordinateSystem cs)
                : base(cs.Name)
            {
                CoordinateSystem = cs;
            }

            protected ICoordinateSystem CoordinateSystem
            {
                get { return coordinateSystem; }
                set
                {
                    coordinateSystem = value;
                    BuildChildNodes();
                }
            }

            protected override void Dispose(bool Disposing)
            {
                if (!IsDisposed)
                {
                    IsDisposed = true;
                }
            }

            protected override void BuildChildNodes()
            {
                TreeNode alias = new TreeNode("Alias");
                Nodes.Add(alias);
                alias.Nodes.Add(CoordinateSystem.Alias);

                TreeNode auth = new TreeNode("Authority");
                Nodes.Add(auth);
                auth.Nodes.Add(CoordinateSystem.Authority);

                TreeNode code = new TreeNode("Authority Code");
                Nodes.Add(code);
                code.Nodes.Add(CoordinateSystem.AuthorityCode);
            }
        }

        protected abstract class CoordinateSystemNode<TCoordinateSystem>
            : CoordinateSystemNode
            where TCoordinateSystem : ICoordinateSystem
        {
            protected CoordinateSystemNode(TCoordinateSystem cs)
                : base(cs)
            {
            }

            protected new TCoordinateSystem CoordinateSystem
            {
                get { return (TCoordinateSystem) base.CoordinateSystem; }
            }
        }

        #endregion

        #region Nested type: CoordinateTransformNode

        protected class CoordinateTransformNode : CustomTreeNode
        {
            private ICoordinateTransformation transform;

            public CoordinateTransformNode(ICoordinateTransformation transform)
                : base("Coordinate Transform")
            {
                Transform = transform;
            }

            private ICoordinateTransformation Transform
            {
                get { return transform; }
                set
                {
                    transform = value;
                    BuildChildNodes();
                }
            }


            protected override void Dispose(bool Disposing)
            {
                if (!IsDisposed)
                {
                    IsDisposed = true;
                }
            }

            protected override void BuildChildNodes()
            {
                if (Transform == null)
                {
                    Nodes.Add("None");
                    return;
                }

                TreeNode name = new TreeNode("Name");
                Nodes.Add(name);
                name.Nodes.Add(Transform.Name);

                TreeNode auth = new TreeNode("Authority Code");
                Nodes.Add(auth);

                auth.Nodes.Add(Transform.AuthorityCode);

                TreeNode area = new TreeNode("Area of Use");
                Nodes.Add(area);
                area.Nodes.Add(Transform.AreaOfUse);

                TreeNode source = new TreeNode("Source Coordinate System");
                Nodes.Add(source);

                TreeNode type = new TreeNode("Transform Type");
                Nodes.Add(type);
                type.Nodes.Add(Enum.GetName(typeof (TransformType), Transform.TransformType));

                source.Nodes.Add(NodeFactory.CreateCoordinateSystemNode(Transform.Source));

                TreeNode trgt = new TreeNode("Target Coordinate System");
                Nodes.Add(trgt);
                trgt.Nodes.Add(NodeFactory.CreateCoordinateSystemNode(Transform.Target));
            }
        }

        #endregion

        #region Nested type: CustomTreeNode

        protected abstract class CustomTreeNode : TreeNode, IDisposable
        {
            protected CustomTreeNode(string name)
                : base(name)
            {
                ///TODO override checkbox rendering
            }

            public new CustomTreeView TreeView
            {
                get { return (CustomTreeView) base.TreeView; }
            }

            protected bool IsDisposed { get; set; }

            #region IDisposable Members

            public void Dispose()
            {
                Dispose(true);
                GC.SuppressFinalize(this);
            }

            #endregion

            ~CustomTreeNode()
            {
                Dispose(false);
            }

            protected abstract void Dispose(bool Disposing);

            protected abstract void BuildChildNodes();
        }

        #endregion

        #region Nested type: DbProviderNode

        protected class DbProviderNode : ProviderNode<ISpatialDbProvider>
        {
            public DbProviderNode(ISpatialDbProvider provider)
                : base(provider)
            {
            }

            protected override void BuildChildNodes()
            {
                base.BuildChildNodes();

                TreeNode con = new TreeNode("Connection String");
                Nodes.Add(con);
                con.Nodes.Add(Provider.ConnectionString);

                TreeNode sch = new TreeNode("Schema");
                Nodes.Add(sch);
                sch.Nodes.Add(Provider.TableSchema);

                TreeNode tbl = new TreeNode("Table");
                Nodes.Add(tbl);
                tbl.Nodes.Add(Provider.Table);

                Nodes.Add(new CoordinateTransformNode(Provider.CoordinateTransformation));
            }
        }

        #endregion

        #region Nested type: FeatureLayerNode

        protected class FeatureLayerNode
            : LayerNode<IFeatureLayer>
        {
            public FeatureLayerNode(IFeatureLayer layer)
                : base(layer)
            {
            }

            protected override void BuildChildNodes()
            {
                TreeNode n = new TreeNode("Type");
                Nodes.Add(n);
                n.Nodes.Add("Feature Layer");

                base.BuildChildNodes();
            }
        }

        #endregion

        #region Nested type: GeographicCoordinateSystemNode

        protected class GeographicCoordinateSystemNode : CoordinateSystemNode<IGeographicCoordinateSystem>
        {
            public GeographicCoordinateSystemNode(IGeographicCoordinateSystem cs)
                : base(cs)
            {
            }

            protected override void BuildChildNodes()
            {
                base.BuildChildNodes();

                TreeNode ang = new TreeNode("Angular Unit");
                Nodes.Add(ang);
                ang.Nodes.Add(CoordinateSystem.AngularUnit.Name);
            }
        }

        #endregion

        #region Nested type: GeometryStyleNode

        protected class GeometryStyleNode : StyleNode<GeometryStyle>
        {
            public GeometryStyleNode(GeometryStyle style, string name)
                : base(style, name)
            {
            }
        }

        #endregion

        #region Nested type: LabelLayerNode

        protected class LabelLayerNode
            : LayerNode<LabelLayer>
        {
            public LabelLayerNode(LabelLayer layer)
                : base(layer)
            {
            }
        }

        #endregion

        #region Nested type: LayerGroupNode

        protected class LayerGroupNode
            : LayerNode<LayerGroup>
        {
            public LayerGroupNode(LayerGroup grp)
                : base(grp)
            {
            }

            protected override void BuildChildNodes()
            {
                TreeNode tn = new TreeNode("Child Layers");
                foreach (ILayer l in Layer)
                    tn.Nodes.Add(NodeFactory.CreateLayerNode(l));

                Nodes.Add(tn);

                base.BuildChildNodes();
            }
        }

        #endregion

        #region Nested type: LayerNode

        protected abstract class LayerNode : CustomTreeNode
        {
            private ILayer layer;

            public LayerNode(ILayer layer)
                : base(layer.LayerName)
            {
                Layer = layer;
                Layer.PropertyChanged += Layer_PropertyChanged;
            }

            public ILayer Layer
            {
                get { return layer; }
                set
                {
                    if (!Equals(layer, default(ILayer)))
                        Nodes.Clear();
                    layer = value;
                    if (value != null)
                        BuildChildNodes();
                }
            }


            private void Layer_PropertyChanged(object sender, PropertyChangedEventArgs e)
            {
                if (e.PropertyName == "Enabled")
                {
                    if (Checked != Layer.Enabled)
                        Checked = Layer.Enabled;
                }
            }

            protected override void Dispose(bool p)
            {
                if (!IsDisposed)
                {
                    Layer.PropertyChanged -= Layer_PropertyChanged;
                }
            }

            protected override void BuildChildNodes()
            {
                TreeNode ds = new TreeNode("Datasource");
                Nodes.Add(ds);

                ds.Nodes.Add(NodeFactory.CreateProviderNode(Layer.DataSource));

                TreeNode srid = new TreeNode("Srid");
                Nodes.Add(srid);

                srid.Nodes.Add(string.IsNullOrEmpty(Layer.Srid) ? "None" : Layer.Srid);

                TreeNode cs = new TreeNode("Spatial Reference System");
                Nodes.Add(cs);
                if (Layer.SpatialReference == null)
                    cs.Nodes.Add("None");
                else
                    cs.Nodes.Add(NodeFactory.CreateCoordinateSystemNode(Layer.SpatialReference));

                TreeNode tran = new TreeNode("Transformation");
                Nodes.Add(tran);
                if (Layer.CoordinateTransformation == null)
                    tran.Nodes.Add("None");
                else
                    tran.Nodes.Add(new CoordinateTransformNode(Layer.CoordinateTransformation));
            }
        }

        protected abstract class LayerNode<TLayer>
            : LayerNode where TLayer : ILayer
        {
            protected LayerNode(TLayer layer)
                : base(layer)
            {
            }

            public new TLayer Layer
            {
                get { return (TLayer) base.Layer; }
            }
        }

        #endregion

        #region Nested type: NodeFactory

        protected static class NodeFactory
        {
            public static TreeNode CreateLayerNode<TLayer>(TLayer layer)
                where TLayer : ILayer
            {
                if (IsAssignbleFrom(typeof (IFeatureLayer), layer.GetType()))
                {
                    return new FeatureLayerNode((IFeatureLayer) layer);
                }
                if (IsAssignbleFrom(typeof (LayerGroup), layer.GetType()))
                {
                    return new LayerGroupNode((LayerGroup) (object) layer);
                }
                if (IsAssignbleFrom(typeof (LabelLayer), layer.GetType()))
                {
                    return new LabelLayerNode((LabelLayer) (object) layer);
                }

                throw new NotImplementedException();
            }

            public static TreeNode CreateLayerNode(ILayer layer)
            {
                if (layer is IFeatureLayer)
                    return CreateLayerNode((IFeatureLayer) layer);

                if (layer is LayerGroup)
                    return CreateLayerNode((LayerGroup) layer);

                if (layer is LabelLayer)
                    return CreateLayerNode((LabelLayer) layer);

                throw new NotImplementedException();
            }

            public static TreeNode CreateCoordinateSystemNode<TCoordinateSystem>(TCoordinateSystem cs)
                where TCoordinateSystem : ICoordinateSystem
            {
                if (IsAssignbleFrom(typeof (IGeographicCoordinateSystem), cs.GetType()))
                    return new GeographicCoordinateSystemNode((IGeographicCoordinateSystem) cs);
                if (IsAssignbleFrom(typeof (IProjectedCoordinateSystem), cs.GetType()))
                    return new ProjectedCoordinateSystemNode((IProjectedCoordinateSystem) cs);
                return new CoordinateSystemNode(cs);
            }

            public static TreeNode CreateCoordinateSystemNode(ICoordinateSystem cs)
            {
                if (cs is IProjectedCoordinateSystem)
                    return CreateCoordinateSystemNode((IProjectedCoordinateSystem) cs);

                if (cs is IGeographicCoordinateSystem)
                    return CreateCoordinateSystemNode((IGeographicCoordinateSystem) cs);

                return new CoordinateSystemNode(cs);
            }

            public static TreeNode CreateProviderNode<TProvider>(TProvider provider) where TProvider : IProvider
            {
                if (IsAssignbleFrom(typeof (AsyncFeatureProviderAdapter), provider.GetType()))
                    return CreateProviderNode(((AsyncFeatureProviderAdapter) (object) provider).InnerFeatureProvider);

                if (IsAssignbleFrom(typeof (ShapeFileProvider), provider.GetType()))
                    return new ShapeFileProviderNode((ShapeFileProvider) (object) provider);

                if (IsAssignbleFrom(typeof (ISpatialDbProvider), provider.GetType()))
                    return new DbProviderNode((ISpatialDbProvider) provider);

                throw new NotImplementedException();
            }

            public static TreeNode CreateProviderNode(IProvider provider)
            {
                if (provider is AsyncFeatureProviderAdapter)
                    return CreateProviderNode(((AsyncFeatureProviderAdapter) provider).InnerFeatureProvider);
                if (provider is ShapeFileProvider)
                    return CreateProviderNode((ShapeFileProvider) provider);
                if (provider is ISpatialDbProvider)
                    return CreateProviderNode((ISpatialDbProvider) provider);

                throw new NotImplementedException();
            }

            private static bool IsAssignbleFrom(Type baseType, Type other)
            {
                if (Equals(baseType, other))
                    return true;

                return baseType.IsAssignableFrom(other);
            }
        }

        #endregion

        #region Nested type: ProjectedCoordinateSystemNode

        private class ProjectedCoordinateSystemNode : CoordinateSystemNode<IProjectedCoordinateSystem>
        {
            public ProjectedCoordinateSystemNode(IProjectedCoordinateSystem cs)
                : base(cs)
            {
            }

            protected override void BuildChildNodes()
            {
                base.BuildChildNodes();

                TreeNode unit = new TreeNode("Linear Unit");
                Nodes.Add(unit);

                unit.Nodes.Add(CoordinateSystem.LinearUnit.Name);
            }
        }

        #endregion

        #region Nested type: ProviderNode

        protected abstract class ProviderNode : CustomTreeNode
        {
            private IProvider provider;

            protected ProviderNode(IProvider provider)
                : base(provider.GetType().Name)
            {
                Provider = provider;
            }

            protected IProvider Provider
            {
                get { return provider; }
                set
                {
                    provider = value;
                    BuildChildNodes();
                }
            }

            protected override void BuildChildNodes()
            {
                TreeNode n = new TreeNode("Type");
                Nodes.Add(n);
                n.Nodes.Add(Provider.GetType().Name);

                TreeNode srid = new TreeNode("Srid");
                Nodes.Add(srid);
                srid.Nodes.Add(string.IsNullOrEmpty(Provider.Srid) ? "None" : Provider.Srid);

                TreeNode spat = new TreeNode("Spatial Reference System");
                Nodes.Add(spat);

                if (Provider.SpatialReference == null)
                    spat.Nodes.Add("None");
                else
                    spat.Nodes.Add(NodeFactory.CreateCoordinateSystemNode(Provider.SpatialReference));


                TreeNode transform = new TreeNode("Transform");
                Nodes.Add(transform);
                if (Provider.CoordinateTransformation == null)
                    transform.Nodes.Add("None");
                else
                    transform.Nodes.Add(new CoordinateTransformNode(Provider.CoordinateTransformation));
            }

            protected override void Dispose(bool Disposing)
            {
                if (!IsDisposed)
                {
                    IsDisposed = true;
                }
            }
        }

        protected abstract class ProviderNode<TProvider>
            : ProviderNode
            where TProvider : IProvider
        {
            protected ProviderNode(TProvider provider)
                : base(provider)
            {
            }

            protected new TProvider Provider
            {
                get { return (TProvider) base.Provider; }
            }
        }

        #endregion

        #region Nested type: ShapeFileProviderNode

        protected class ShapeFileProviderNode : ProviderNode<ShapeFileProvider>
        {
            public ShapeFileProviderNode(ShapeFileProvider shp)
                : base(shp)
            {
            }

            protected override void BuildChildNodes()
            {
                base.BuildChildNodes();

                TreeNode n = new TreeNode("Path");
                Nodes.Add(n);
                n.Nodes.Add(new TreeNode(Provider.Filename));

                TreeNode ndx = new TreeNode("Is Spatially Indexed");
                Nodes.Add(ndx);
                ndx.Nodes.Add(new TreeNode(Provider.IsSpatiallyIndexed.ToString()));

                Nodes.Add(new CoordinateTransformNode(Provider.CoordinateTransformation));
            }
        }

        #endregion

        #region Nested type: StyleNode

        protected abstract class StyleNode<TStyle> : CustomTreeNode
            where TStyle : IStyle
        {
            protected StyleNode(TStyle style, string name)
                : base(name)
            {
                Style = style;
            }

            public TStyle Style { get; protected set; }

            protected override void Dispose(bool Disposing)
            {
                if (!IsDisposed)
                {
                    Style = default(TStyle);
                    IsDisposed = true;
                }
            }

            protected override void BuildChildNodes()
            {
            }
        }

        #endregion
    }

    public class LayerEnabledChangeEventArgs : EventArgs
    {
        public LayerEnabledChangeEventArgs(ILayer lyr, bool enable)
        {
            Layer = lyr;
            Enabled = enable;
        }

        public ILayer Layer { get; protected set; }
        public bool Enabled { get; protected set; }
    }
}