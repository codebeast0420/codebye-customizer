import bpy
# you should install last io_scene_gltf2
import io_scene_gltf2

import os

def makeVisible(ob):
    ob.hide = False
    for child in ob.children:
        child.hide = False
        #call the function on the child to catch all its children
        #as there is no ob.children_recursive attribute
        makeVisible(child)

filepath = bpy.data.filepath
directory = os.path.dirname(filepath)
print(directory)

context = bpy.context
scene = context.scene
# select scene objects that have no parent and children
objs = [o for o in scene.objects if not o.parent and len(o.children)]

for o in objs:
    # deselect all
    bpy.ops.object.select_all(action='DESELECT')
    scene.objects.active = o
    makeVisible(o)
    # select all children recursively
    bpy.ops.object.select_grouped(type='CHILDREN_RECURSIVE')
    # select parent too
    o.select = True
    filepath = directory + "/output/gltf/" + o.name
    print(filepath)
    bpy.ops.export_scene.gltf(export_embed_buffers=False, export_embed_images=False, export_morph_tangent=True, export_frame_range=True, export_layers=True, export_copyright="", export_animations=True, export_cameras=False, export_texcoords=True, export_force_sampling=False, export_extras=False, export_morph_normal=True, export_displacement=False, export_lights=False, export_camera_infinite=False, export_strip=False, export_morph=True, export_force_indices=False, export_indices='UNSIGNED_INT', export_skins=True, export_materials=True, export_tangents=True, export_selected=True, export_frame_step=1, export_colors=True, export_apply=False, export_bake_skins=False, will_save_settings=False, export_move_keyframes=True, export_current_frame=True, export_normals=True, export_yup=True, filepath=filepath, check_existing=True, filter_glob="*.gltf")